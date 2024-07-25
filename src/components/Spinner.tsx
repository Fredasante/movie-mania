import Image from "next/image";

const Spinner = () => {
  return (
    <Image src="/spinner.svg" alt="loading spinner" width={80} height={80} />
  );
};

export default Spinner;
