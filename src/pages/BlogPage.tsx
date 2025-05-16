
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from 'react-helmet-async';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 10 Must-Visit Places in Samarkand",
    excerpt: "Discover the most stunning architectural marvels and historical sites in Samarkand, the jewel of the Silk Road.",
    image: "https://images.unsplash.com/photo-1625324462667-ebf8326d29b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    date: "May 12, 2023",
    author: "Aziza Karimova",
    category: "Destinations",
    slug: "top-places-samarkand"
  },
  {
    id: 2,
    title: "Uzbek Cuisine: A Culinary Journey",
    excerpt: "Explore the rich flavors and traditions of Uzbek cuisine, from plov (pilaf) to samsa and beyond.",
    image: "https://images.unsplash.com/photo-1583525068220-07e25d5613e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    date: "April 28, 2023",
    author: "Rustam Khasanov",
    category: "Culture",
    slug: "uzbek-cuisine"
  },
  {
    id: 3,
    title: "Traveling in Uzbekistan: Essential Tips",
    excerpt: "Everything you need to know about transportation, accommodation, language, and customs when visiting Uzbekistan.",
    image: "https://images.unsplash.com/photo-1513023840371-31a36d78632c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    date: "April 15, 2023",
    author: "Dilshod Rahimov",
    category: "Travel Tips",
    slug: "uzbekistan-travel-tips"
  },
  {
    id: 4,
    title: "The Historical Significance of Bukhara",
    excerpt: "Learn about Bukhara's rich history as a center of learning, trade, and culture throughout the centuries.",
    image: "https://images.unsplash.com/photo-1629212099316-6b2e711f85af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    date: "March 27, 2023",
    author: "Gulnara Tashmatova",
    category: "History",
    slug: "bukhara-history"
  },
  {
    id: 5,
    title: "Uzbek Traditional Crafts: Ceramics, Textiles, and More",
    excerpt: "Discover the intricate artistry behind Uzbekistan's renowned ceramics, textiles, woodworking, and other traditional crafts.",
    image: "https://images.unsplash.com/photo-1628086087872-59324e6eecbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    date: "March 10, 2023",
    author: "Kamila Yusupova",
    category: "Culture",
    slug: "uzbek-crafts"
  },
  {
    id: 6,
    title: "Best Time to Visit Uzbekistan: Seasonal Guide",
    excerpt: "Plan your trip with our comprehensive guide to Uzbekistan's seasons, festivals, and the best times to visit different regions.",
    image: "https://images.unsplash.com/photo-1628935657536-4913931c14e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    date: "February 24, 2023",
    author: "Timur Alimov",
    category: "Travel Tips",
    slug: "best-time-visit-uzbekistan"
  }
];

const BlogPage = () => {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);
  
  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <>
      <Helmet>
        <title>Travel Blog & Tips | UzTravel - O'zbekistonda sayohat qilish</title>
        <meta name="description" content="Discover useful travel tips, cultural insights, and destination guides for Uzbekistan. Learn about the best places to visit, local cuisine, traditions, and practical advice for traveling in Uzbekistan." />
        <meta name="keywords" content="O'zbekistonda sayohat qilish, O'zbekistonda ekskursiyalar, ichki turizm O'zbekiston, turizm xizmatlari Toshkent" />
      </Helmet>
    
      <div className="pt-24 pb-16 bg-uznavy text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-uzvanilla">Blog & Travel Tips</h1>
          <p className="text-lg max-w-3xl">
            Discover insights, tips, and stories about Uzbekistan's culture, history, and travel experiences.
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Featured Post */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6">Featured Article</h2>
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="flex flex-col justify-center p-6">
                  <div className="mb-4 flex items-center text-sm text-gray-600 space-x-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User size={16} className="mr-1" />
                      <span>{featuredPost.author}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">{featuredPost.title}</h3>
                  <span className="inline-block bg-uzvanilla/30 text-uznavy px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {featuredPost.category}
                  </span>
                  <p className="text-gray-700 mb-6">{featuredPost.excerpt}</p>
                  <div>
                    <Link to={`/blog/${featuredPost.slug}`}>
                      <Button className="bg-uznavy hover:bg-uznavy/90">
                        Read More <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Recent Posts */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6">Recent Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden h-full flex flex-col">
                  <div className="overflow-hidden h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 flex-grow">
                    <div className="mb-3 flex items-center text-sm text-gray-600">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-2">{post.title}</h3>
                    <span className="inline-block bg-uzvanilla/30 text-uznavy px-3 py-1 rounded-full text-xs font-medium mb-3">
                      {post.category}
                    </span>
                    <p className="text-gray-700 mb-4">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="text-uznavy font-medium hover:text-uznavy/80 inline-flex items-center">
                      Read More <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Categories and Subscribe */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-serif font-bold mb-6">Categories</h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Link 
                    key={category}
                    to={`/blog/category/${category.toLowerCase()}`}
                    className="px-4 py-2 bg-gray-100 hover:bg-uzvanilla/20 text-uznavy rounded-full text-sm font-medium transition-colors"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-uznavy/5 p-6 rounded-lg">
              <h3 className="text-xl font-serif font-bold mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-700 mb-4">
                Get the latest travel tips, destination guides, and special offers delivered to your inbox.
              </p>
              <div className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-uznavy focus:border-transparent"
                />
                <Button className="bg-uznavy hover:bg-uznavy/90 w-full">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
