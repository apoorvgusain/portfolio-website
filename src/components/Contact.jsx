const Contact = () => {
  return (
    <section
      id="contacts"
      className="flex flex-col items-center justify-center py-20 px-6 text-center  text-white"
    >
      <p className="text-accent text-lg tracking-widest mb-4">
        What&apos;s Next?
      </p>
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Get In Touch</h2>
      <p className=" text-sm md:text-lg mb-6 max-w-xl">
        I am actively seeking new career opportunities, and my inbox is always
        open. Whether you have a job opportunity or if you just want to connect,
        feel free to reach out.
      </p>

      <a href="mailto:apoorvgusain123@gmail.com">
        <button className="mt-6 px-6 py-2 text-accent border-2 border-accent hover:bg-accent hover:text-[#0a192f] rounded-md transition-all duration-300">
          Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contact;
