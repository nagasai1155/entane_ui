import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import EsanteBanner from '../components/Reusable/EsanteBanner';

const imgImage    = "https://www.figma.com/api/mcp/asset/fa41ab00-f056-49c8-a521-b82edf4c937a";
const imgAvatar   = "https://www.figma.com/api/mcp/asset/fa74f482-bf25-4383-bc67-3be590e8c2b4";
const imgImage1   = "https://www.figma.com/api/mcp/asset/5f309bdf-72f7-4ef7-8241-61d1fe2e4ced";
const imgAvatar1  = "https://www.figma.com/api/mcp/asset/51b667c2-c4cc-46f5-8cc2-de5b0a276274";
const imgImage2   = "https://www.figma.com/api/mcp/asset/f2758485-85c6-43e6-bde4-8b10bc399e58";
const imgAvatar2  = "https://www.figma.com/api/mcp/asset/32e4c09a-a7d9-4513-8e27-bb80ff31129a";
const imgImage3   = "https://www.figma.com/api/mcp/asset/09d50615-bfa8-434b-8b69-f773faed2b53";
const imgAvatar3  = "https://www.figma.com/api/mcp/asset/a076d2c7-229b-4afb-834a-406a3ccdc374";
const imgImage4   = "https://www.figma.com/api/mcp/asset/11ed5df5-0d49-4758-8040-af838aecea84";
const imgAvatar4  = "https://www.figma.com/api/mcp/asset/57f152a2-4432-4def-8472-0332f720783d";
const imgImage5   = "https://www.figma.com/api/mcp/asset/4d0c1347-fc24-45b9-95c8-27ca4f441b09";
const imgAvatar5  = "https://www.figma.com/api/mcp/asset/083713fe-f7f3-419b-8c0f-a14476358aff";
const imgImage6   = "https://www.figma.com/api/mcp/asset/334582c2-186e-44f3-874f-40feb6a4d327";
const imgAvatar6  = "https://www.figma.com/api/mcp/asset/edc99b8b-97d9-4f96-9f81-2a243f4ec772";
const imgImage7   = "https://www.figma.com/api/mcp/asset/eeb54564-97d6-4e79-b8a8-0f09d0035ad2";
const imgAvatar7  = "https://www.figma.com/api/mcp/asset/7a3215b5-ca9f-4857-8a2a-de801216b03e";
const imgImage8   = "https://www.figma.com/api/mcp/asset/3e9893c0-1615-4c15-b237-78b093eca88b";
const imgAvatar8  = "https://www.figma.com/api/mcp/asset/1e545287-a677-4c44-9325-6a07dc037fa6";
const imgSearch   = "https://www.figma.com/api/mcp/asset/24c180ba-adfc-4cf5-a164-04083d0fca6b";
const imgArrowUpRight = "https://www.figma.com/api/mcp/asset/f4c02ea5-df2d-47d2-a2ef-b2ea3df966c3";
const imgArrowDown    = "https://www.figma.com/api/mcp/asset/4cdf5a8a-e438-4f4b-a0d2-389a09c12223";

const blogPosts = [
  {
    image: imgImage,
    avatar: imgAvatar,
    avatarBg: '#c7b9da',
    category: 'Design',
    title: 'UX review presentations',
    description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    author: 'Olivia Rhye',
    date: '20 Jan 2022',
  },
  {
    image: imgImage1,
    avatar: imgAvatar1,
    avatarBg: '#aa9c75',
    category: 'Product',
    title: 'Migrating to Linear 101',
    description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    author: 'Phoenix Baker',
    date: '19 Jan 2022',
  },
  {
    image: imgImage2,
    avatar: imgAvatar2,
    avatarBg: '#d4b5ad',
    category: 'Software Engineering',
    title: 'Building your API Stack',
    description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
    author: 'Lana Steiner',
    date: '18 Jan 2022',
  },
  {
    image: imgImage3,
    avatar: imgAvatar3,
    avatarBg: '#abb677',
    category: 'Management',
    title: 'Bill Walsh leadership lessons',
    description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    author: 'Alec Whitten',
    date: '17 Jan 2022',
  },
  {
    image: imgImage4,
    avatar: imgAvatar4,
    avatarBg: '#bea887',
    category: 'Product',
    title: 'PM mental models',
    description: 'Mental models are simple expressions of complex processes or relationships.',
    author: 'Demi WIlkinson',
    date: '16 Jan 2022',
  },
  {
    image: imgImage5,
    avatar: imgAvatar5,
    avatarBg: '#a2a8cd',
    category: 'Design',
    title: 'What is Wireframing?',
    description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
    author: 'Candice Wu',
    date: '15 Jan 2022',
  },
  {
    image: imgImage6,
    avatar: imgAvatar6,
    avatarBg: '#d1baa9',
    category: 'Design',
    title: 'How collaboration makes us better designers',
    description: 'Collaboration can make our teams stronger, and our individual designs better.',
    author: 'Natali Craig',
    date: '14 Jan 2022',
  },
  {
    image: imgImage7,
    avatar: imgAvatar7,
    avatarBg: '#d1dfc3',
    category: 'Product',
    title: 'Our top 10 Javascript frameworks to use',
    description: 'JavaScript frameworks make development easy with extensive features and functionalities.',
    author: 'Drew Cano',
    date: '13 Jan 2022',
  },
  {
    image: imgImage8,
    avatar: imgAvatar8,
    avatarBg: '#cfc3a7',
    category: 'Customer Success',
    title: 'Podcast: Creating a better CX Community',
    description: "Starting a community doesn't need to be complicated, but how do you get started?",
    author: 'Orlando Diggs',
    date: '12 Jan 2022',
  },
];

function BlogCard({ post }) {
  return (
    <div
      className="bg-white flex flex-1 flex-col gap-8 items-start min-w-0 pb-8 pt-6 px-6 relative"
      style={{
        height: '580px',
        boxShadow: '0px 12px 16px 0px rgba(16,24,40,0.08), 0px 4px 6px 0px rgba(16,24,40,0.03)',
      }}
    >
      {/* Image */}
      <div className="relative shrink-0 w-full" style={{ height: '240px' }}>
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col items-start justify-between min-h-0 w-full">
        {/* Heading & subheading */}
        <div className="flex flex-col gap-3 items-start w-full">
          <p
            className="text-[#FF3300] text-sm w-full"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: '20px' }}
          >
            {post.category}
          </p>
          <div className="flex flex-col gap-3 items-start w-full">
            <div className="flex gap-4 items-start w-full">
              <p
                className="flex-1 text-[#00352B] text-2xl min-w-0"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: '32px' }}
              >
                {post.title}
              </p>
              <div className="flex flex-col items-start pt-1 shrink-0">
                <div className="w-6 h-6 relative shrink-0">
                  <img src={imgArrowUpRight} alt="" className="absolute w-full h-full" />
                </div>
              </div>
            </div>
            <p
              className="text-[#667085] text-base w-full"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: '24px' }}
            >
              {post.description}
            </p>
          </div>
        </div>

        {/* Avatar & author */}
        <div className="flex gap-3 items-center shrink-0">
          <div
            className="relative shrink-0"
            style={{ width: '40px', height: '40px', borderRadius: '200px', overflow: 'hidden' }}
          >
            <div
              className="absolute inset-0"
              style={{ backgroundColor: post.avatarBg, borderRadius: '200px' }}
            />
            <img
              src={post.avatar}
              alt={post.author}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ borderRadius: '200px' }}
            />
          </div>
          <div
            className="flex flex-col items-start shrink-0"
            style={{ fontSize: '14px', lineHeight: '20px' }}
          >
            <p
              className="text-[#00352B]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              {post.author}
            </p>
            <p
              className="text-[#667085]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              {post.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const BLOG_INITIAL = 9;
const BLOG_LOAD_MORE = 9;
const allBlogPosts = [...blogPosts, ...blogPosts, ...blogPosts];

function NewsBlogsPage() {
  const [searchValue, setSearchValue] = useState('');
  const [visibleCount, setVisibleCount] = useState(BLOG_INITIAL);

  const visiblePosts = allBlogPosts.slice(0, visibleCount);
  const rows = [];
  for (let i = 0; i < visiblePosts.length; i += 3) {
    rows.push(visiblePosts.slice(i, i + 3));
  }
  const hasMore = visibleCount < allBlogPosts.length;

  return (
    <div className="news-blogs-page">
      <Header />
      <main style={{ paddingTop: '120px' }}>
        <div className="bg-white flex flex-col" style={{ gap: '65px' }}>

          {/* ── Hero / Header Section (96px gap from navbar per Figma) ── */}
          <div
            className="bg-white flex flex-col items-center w-full"
            style={{ paddingTop: '96px' }}
          >
            <div className="flex flex-col items-center px-8 w-full" style={{ maxWidth: '1280px' }}>
              <div className="flex flex-col gap-10 items-center w-full">
                {/* Heading group */}
                <div className="flex flex-col gap-6 items-center" style={{ maxWidth: '1024px', width: '100%' }}>
                  <div className="flex flex-col gap-4 items-center w-full">
                    {/* Badge */}
                    <div className="flex items-start" style={{ mixBlendMode: 'multiply' }}>
                      <div
                        className="flex items-center justify-center"
                        style={{
                          backgroundColor: '#FF3300',
                          borderRadius: '16px',
                          padding: '4px 12px',
                        }}
                      >
                        <span
                          className="text-[#FFFBE9] text-center"
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '20px',
                          }}
                        >
                          Our blog
                        </span>
                      </div>
                    </div>
                    {/* Main title */}
                    <p
                      className="text-[#00352B] text-center w-full"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        fontSize: '48px',
                        lineHeight: '60px',
                        letterSpacing: '-0.96px',
                      }}
                    >
                      Resources and insights
                    </p>
                  </div>
                  {/* Subtitle */}
                  <p
                    className="text-[#FF3300] text-center w-full"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: '20px',
                      lineHeight: '30px',
                    }}
                  >
                    The latest industry news, interviews, technologies, and resources.
                  </p>
                </div>

                {/* Search Input */}
                <div className="flex flex-col items-start" style={{ width: '320px' }}>
                  <div
                    className="flex gap-2 items-center w-full overflow-hidden"
                    style={{
                      backgroundColor: '#fff',
                      border: '1px solid #D0D5DD',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)',
                    }}
                  >
                    <div className="relative shrink-0 w-5 h-5">
                      <img src={imgSearch} alt="" className="absolute w-full h-full" />
                    </div>
                    <input
                      placeholder="Search"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="flex-1 bg-transparent border-0 outline-none text-[#667085] text-base"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        minWidth: 0,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Blog Grid Section ── */}
          <div
            className="flex flex-col items-center w-full"
            style={{ paddingBottom: '96px' }}
          >
            <div
              className="flex flex-col gap-16 items-start px-8 w-full"
              style={{ maxWidth: '1280px' }}
            >
              {/* Card rows */}
              <div className="flex flex-col gap-12 items-start w-full">
                {rows.map((row, rowIdx) => (
                  <div key={rowIdx} className="flex gap-8 items-start justify-center w-full">
                    {row.map((post, idx) => (
                      <BlogCard key={`${rowIdx}-${idx}`} post={post} />
                    ))}
                  </div>
                ))}
              </div>

              {/* Load more */}
              {hasMore && (
                <div className="flex items-start justify-center w-full">
                  <button
                    type="button"
                    onClick={() => setVisibleCount((c) => c + BLOG_LOAD_MORE)}
                    className="flex items-center justify-center gap-2 overflow-hidden"
                    style={{
                      backgroundColor: '#F9F5FF',
                      border: '1px solid #F9F5FF',
                      borderRadius: '8px',
                      padding: '12px 20px',
                      boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)',
                      cursor: 'pointer',
                    }}
                  >
                    <div className="relative shrink-0 w-5 h-5">
                      <img src={imgArrowDown} alt="" className="absolute w-full h-full" />
                    </div>
                    <span
                      className="text-[#FF3300]"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '24px',
                      }}
                    >
                      Load more
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <EsanteBanner />
      </main>
      <Footer />
    </div>
  );
}

export default NewsBlogsPage;
