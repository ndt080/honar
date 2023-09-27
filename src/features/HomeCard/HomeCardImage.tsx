interface HomeCardImageProps {
  src: string;
}

function HomeCardImage({ src }: HomeCardImageProps) {
  return (
    <div className="relative flex-grow-1 w-full max-w-3xl max-h-[400px] overflow-hidden rounded bg-center">
      <img className="w-full h-full object-fill object-center" src={src} alt="preview" />
      <div className="absolute top-0 right-0 left-0 bottom-0 rounded bg-tonal" />
    </div>
  );
}

export default HomeCardImage;