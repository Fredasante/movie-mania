import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex justify-center mt-12">
      <Image src="/spinner.svg" alt="loading" width={100} height={100} />
    </div>
  );
};

export default Loading;
