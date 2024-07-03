import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { getNewParam } from "../ListingImageGallery";
import SharedModal from "./SharedModal";
import { useNavigate, useSearchParams } from "react-router-dom";
import usePathname from "../../../hooks/usePathname";

export default function Modal({
  images,
  onClose,
}) {
  let overlayRef = useRef<HTMLDivElement>(null);
  const [searchParams] = useSearchParams();
  const router = useNavigate();
  const thisPathname = usePathname();
  const photoId = searchParams?.get("photoId");
  let index = Number(photoId);

  const [direction, setDirection] = useState(0);
  const [curIndex, setCurIndex] = useState(index);

  function handleClose() {
    onClose && onClose();
  }

  function changePhotoId(newVal) {
    if (newVal > index) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurIndex(newVal);
    router(`${thisPathname}/?${getNewParam({ value: newVal })}`);
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowRight" && index + 1 < images.length) {
        changePhotoId(index + 1);
      } else if (event.key === "ArrowLeft" && index > 0) {
        changePhotoId(index - 1);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [index, images.length]);

  return (
    <>
      <Dialog
        static
        open={true}
        onClose={handleClose}
        initialFocus={overlayRef}
        className="fixed inset-0 z-50 flex items-center justify-center "
      >
        <Dialog.Overlay
          ref={overlayRef}
          as={motion.div}
          key="backdrop"
          className="fixed inset-0 z-30 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        <SharedModal
          index={curIndex}
          direction={direction}
          images={images}
          changePhotoId={changePhotoId}
          closeModal={handleClose}
          navigation={true}
        />
      </Dialog>
    </>
  );
}
