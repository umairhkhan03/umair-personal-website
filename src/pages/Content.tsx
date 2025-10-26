import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import booksData from "@/content/reading/books.json";
import watchingData from "@/content/watching/content.json";

const Content = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Content</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            What I'm consuming, learning from, and looking forward to.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="pb-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <Tabs defaultValue="reading" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="reading" className="text-lg">Reading</TabsTrigger>
              <TabsTrigger value="watching" className="text-lg">Watching</TabsTrigger>
            </TabsList>
            
            {/* Reading Tab */}
            <TabsContent value="reading" className="space-y-12">
              {/* Currently Reading */}
              <div>
                <h2 className="text-3xl font-semibold mb-6">Currently Reading</h2>
                <ul className="space-y-4">
                  {booksData.currentlyReading.map((book, index) => (
                    <li key={index} className="text-body">
                      <span className="font-semibold">{book.title}</span> by {book.author} — {book.thoughts}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reading Wishlist */}
              <div>
                <h2 className="text-3xl font-semibold mb-6">Wishlist</h2>
                <ul className="space-y-3">
                  {booksData.wishlist.map((book, index) => (
                    <li key={index} className="text-body">
                      <span className="font-semibold">{book.title}</span> by {book.author}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            {/* Watching Tab */}
            <TabsContent value="watching" className="space-y-12">
              {/* Currently Watching */}
              <div>
                <h2 className="text-3xl font-semibold mb-6">Currently Watching</h2>
                <div className="space-y-6">
                  {watchingData.currentlyWatching.map((item, index) => (
                    <div key={index} className="border-b border-border pb-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <span className="text-sm text-muted-foreground">{item.type}</span>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        {item.platform} • {item.season}
                      </p>
                      <p className="text-body leading-relaxed italic">"{item.thoughts}"</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Watch List */}
              <div>
                <h2 className="text-3xl font-semibold mb-6">Watch List</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {watchingData.watchlist.map((item, index) => (
                    <div key={index} className="border border-border p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <span className="text-xs text-muted-foreground">
                          {item.type}
                        </span>
                      </div>
                      {item.year && (
                        <p className="text-sm text-muted-foreground mb-2">{item.year}</p>
                      )}
                      {item.platform && (
                        <p className="text-sm text-muted-foreground mb-2">{item.platform}</p>
                      )}
                      <p className="text-sm text-body">{item.reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Content;

