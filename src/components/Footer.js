const Footer = () => {
    return(
        

<footer class="bg-red-400 rounded-lg shadow-lg mb-2">
    <div class="w-full max-w-screen-lg mx-auto p-4 md:py-4">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS65YB96yNccJ6mjoGWwQ-rROW7V4Hjjy2Adw&usqp=CAU" class="h-8" alt="Mealwheel Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MealWheel</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm sm:mb-0">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Careers</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Terms & Conditions</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm  sm:text-center">© 2023 <a href="https://flowbite.com/" class="hover:underline">MealWheel™</a>. All Rights Reserved.</span>
    </div>
</footer>


    );
};

export default Footer;