import Navbar from "@/components/Navbar";
import booksData from "@/content/reading/books.json";

const Content = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">content</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            gonna add cool things to watch too.
          </p>
        </div>
      </section>

      {/* Reading Section */}
      <section className="pb-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl space-y-12">
          {/* Currently Reading */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">currently reading</h2>
            <ul className="space-y-4">
              {booksData.currentlyReading.map((book, index) => (
                <li key={index} className="text-body">
                  <span className="font-semibold">{book.title}</span> by {book.author}
                  {book.thoughts && ` — ${book.thoughts}`}
                </li>
              ))}
            </ul>
          </div>

          {/* Reading Wishlist */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">wishlist</h2>
            <ul className="space-y-3">
              {booksData.wishlist.map((book, index) => (
                <li key={index} className="text-body">
                  <span className="font-semibold">{book.title}</span> by {book.author}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;

