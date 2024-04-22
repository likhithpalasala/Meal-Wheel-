const Contact = () => {
    return (
        <div className="max-w-md mx-auto">
            <h1 className="font-bold text-3xl p-4 m-4">Contact us Page</h1>
            <form className="flex flex-col">

                   <input type="text" 
                   className="border border-black p-2 m-2" placeholder="Name" />
                   <input type="text" className="border border-black p-2 m-2 h-32 resize-none" placeholder="Message"/>

                   <button className="border border-black p-2 m-2 bg-gray-200 rounded-lg">Submit</button>
            </form>
        </div>
 
    );
};

export default Contact;