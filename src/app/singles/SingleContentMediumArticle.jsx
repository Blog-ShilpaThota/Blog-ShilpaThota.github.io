import React, { FC, useEffect, useRef, useState } from "react";
import SingleContentDemo from "./SingleContentDemo";
import SingleAuthor from "./SingleAuthor";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const SingleContentMediumArticle = ({ content }) => {
  const endedAnchorRef = useRef(null);
  const contentRef = useRef(null);
  const progressRef = useRef(null);
  const [isShowScrollToTop, setIsShowScrollToTop] = useState(false);

  const endedAnchorEntry = useIntersectionObserver(endedAnchorRef, {
    threshold: 0,
    root: null,
    rootMargin: "0%",
    freezeOnceVisible: false,
  });

  useEffect(() => {
    const handleProgressIndicator = () => {
      const entryContent = contentRef.current;
      const progressBarContent = progressRef.current;

      if (!entryContent || !progressBarContent) {
        return;
      }

      const totalEntryH = entryContent.offsetTop + entryContent.offsetHeight;
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      let scrolled = (winScroll / totalEntryH) * 100;

      progressBarContent.innerText = scrolled.toFixed(0) + "%";

      if (scrolled >= 50) {
        setIsShowScrollToTop(true);
      } else {
        setIsShowScrollToTop(false);
      }
    };

    const handleProgressIndicatorHeadeEvent = () => {
      window?.requestAnimationFrame(handleProgressIndicator);
    };
    handleProgressIndicator();
    window?.addEventListener("scroll", handleProgressIndicatorHeadeEvent);
    return () => {
      window?.removeEventListener("scroll", handleProgressIndicatorHeadeEvent);
    };
  }, []);

  const showLikeAndCommentSticky =
    !endedAnchorEntry?.intersectionRatio &&
    (endedAnchorEntry?.boundingClientRect.top || 0) > 0;

  return (
    <div className="relative">
      <div className="nc-SingleContent space-y-10">
        <div
          id="single-entry-content"
          className="prose lg:prose-lg !max-w-screen-md mx-auto dark:prose-invert"
          ref={contentRef}
        >
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>

        <div className="max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700"></div>
        <div className="max-w-screen-md mx-auto ">
          <SingleAuthor />
        </div>
      </div>

      <div
        className={`sticky mt-8 bottom-8 z-40 justify-center ${
          showLikeAndCommentSticky ? "flex" : "hidden"
        }`}
      >
        <div className="bg-white dark:bg-neutral-800 shadow-lg rounded-full ring-1 ring-offset-1 ring-neutral-900/5 p-1.5 flex items-center justify-center space-x-2 text-xs">
          <button
            className={`w-9 h-9 items-center justify-center bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 rounded-full ${
              isShowScrollToTop ? "flex" : "hidden"
            }`}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <ArrowUpIcon className="w-6 h-6" />
          </button>
          <button
            ref={progressRef}
            className={`w-9 h-9 items-center justify-center ${
              isShowScrollToTop ? "hidden" : "flex"
            }`}
            title="Scroll progress"
          >
            %
          </button>
        </div>
      </div>
      <div ref={endedAnchorRef}></div>
    </div>
  );
};

export default SingleContentMediumArticle;
