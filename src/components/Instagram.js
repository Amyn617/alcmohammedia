import React, { useEffect, useState, useCallback, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const LoadingSkeleton = () => (
  <div className="animate-pulse">
    <div className="aspect-square bg-gray-200 rounded-xl"></div>
  </div>
);

const CarouselPost = ({ post }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState([]);

  const getSlideUrl = (index) => {
    if (post.media_type === "CAROUSEL_ALBUM")
      return post.children.data[index].media_url;
    return post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url;
  };

  // Preload all images when component mounts
  useEffect(() => {
    const preloadImages = async () => {
      if (post.media_type === "CAROUSEL_ALBUM") {
        const imagePromises = post.children.data.map((child, index) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = getSlideUrl(index);
            img.onload = () => resolve(img);
            img.onerror = reject;
          });
        });

        try {
          const loadedImages = await Promise.all(imagePromises);
          setPreloadedImages(loadedImages);
          setIsLoading(false);
        } catch (error) {
          console.error("Failed to preload some images");
          setIsLoading(false);
        }
      } else {
        const img = new Image();
        img.src = getSlideUrl(0);
        img.onload = () => {
          setPreloadedImages([img]);
          setIsLoading(false);
        };
      }
    };

    preloadImages();
  }, [post]);

  return (
    <a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg transition-all duration-500 bg-gray-100 group">
        {isLoading && <LoadingSkeleton />}

        <div className="relative w-full h-full overflow-hidden">
          {!isLoading && (
            <img
              src={getSlideUrl(currentSlide)}
              alt={post.caption || "Instagram post"}
              className="absolute w-full h-full object-cover"
            />
          )}
        </div>

        <div
          className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-4 transition-all duration-300 ${
            isHovering ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <p className="text-white text-lg line-clamp-3 mb-4">
            {post.caption || ""}
          </p>
          <div className="flex items-center gap-6 text-white">
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-heart text-red-500"></i>
              {post.like_count?.toLocaleString() || 0}
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-comment text-sky-500"></i>
              {post.comments_count?.toLocaleString() || 0}
            </span>
          </div>
        </div>

        {post.media_type === "CAROUSEL_ALBUM" && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {post.children.data.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentSlide(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white scale-110"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </a>
  );
};

const Instagram = () => {
  const { t, language } = useContext(LanguageContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/${process.env.REACT_APP_INSTAGRAM_BUSINESS_ID}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,like_count,comments_count,children{media_url,thumbnail_url}&access_token=${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`
        );

        if (!response.ok) return;
        const data = await response.json();
        setPosts(data.data);
      } catch (error) {
        // Silently handle error
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading)
    return (
      <div className="p-10 lg:p-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <LoadingSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    );

  if (!posts.length) return null;

  return (
    <div className="p-10 lg:p-20 bg-white" aria-label="instagram">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-md text-red-500 mb-4 uppercase">{t("socialMedia")}</p>
          <h2 className="text-3xl lg:text-5xl font-semibold mb-6 text-gray-500">
            {t("followUsOn")} <span className="text-sky-500">{language === 'ar' ? 'انستغرام' : 'Instagram'}</span>
          </h2>
          <p className="text-gray-500 mb-8">
            {t("stayUpdated")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 6).map((post) => (
            <CarouselPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instagram;
