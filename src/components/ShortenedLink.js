const ShortenedLink = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full lg:py-4 lg:px-5 bg-white rounded-md">
      <a
        href={data.original_link}
        target="_blank"
        rel="noreferrer noopener"
        className="block font-medium hover:text-neutral-grayishViolet pt-5 pb-4 px-4 sm:px-6 lg:p-0 border-b-2 lg:border-none border-solid border-gray-200 transition-colors"
      >
        {data.original_link}
      </a>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 pb-6 sm:py-5 px-4 sm:px-6 lg:p-0">
        <a
          href={data.full_short_link}
          target="_blank"
          rel="noreferrer noopener"
          className="text-primary-cyan hover:text-opacity-50 font-medium transition-colors"
        >
          {data.full_short_link}
        </a>
        <button className="text-white font-semibold py-3 px-8 bg-primary-cyan hover:bg-opacity-80 rounded-md transition-all">
          Copy
        </button>
      </div>
    </div>
  );
};

export default ShortenedLink;
