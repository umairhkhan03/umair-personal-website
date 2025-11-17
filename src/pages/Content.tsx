import Navbar from "@/components/Navbar";
import ContentHero from "@/components/content/ContentHero";
import booksData from "@/content/reading/books.json";

const Content = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ContentHero title="content" />
      
      {/* Reading Section */}
      <section className="pb-20 px-14 md:px-24 lg:px-32">
        <div className="max-w-3xl ml-8 md:ml-16 lg:ml-24 space-y-12">
          {/* Currently Reading */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">currently reading</h2>
            <ul className="space-y-3">
              {booksData.currentlyReading.map((book, index) => (
                <li key={index} className="text-body">
                  <span className="font-semibold">{book.title}</span> by {book.author}
                </li>
              ))}
            </ul>
          </div>

          {/* Wishlist */}
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

