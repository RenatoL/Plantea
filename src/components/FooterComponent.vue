<script setup lang="ts">
import '@/index.css'
</script>

<template>
    <!-- <footer class="bg-plantea-white-smoke-500 shadow border-t dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://plantea.pt" class="hover:underline">Plantea™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer> -->

    <footer class="py-6 md:pt-8 md:pb-4 relative overflow-hidden">
        <div class="mx-auto max-w-grid px-5 md:px-10 ">
            <div class="grid grid-cols-12 gap-x-3 md:gap-x-5 gap-y-6">
                <div class="col-span-12 lg:col-span-6 h-full">
                    <div class="flex flex-col justify-between items-center h-full gap-y-6">
                        <div class="gap-x-3 md:gap-x-5 gap-y-2 md:gap-y-3">
                            <div>
                                <h3 class="font-mono font-600 text-mono-14 mb-1">Company</h3>
                                <ul>
                                    <li>
                                        <p>About Us</p>
                                    </li>
                                    <li>
                                        <p>Wholesale</p>
                                    </li>
                                    <li>
                                        <p>Workshops</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-6 h-full">
                    <div class="flex flex-col justify-between h-full gap-y-6">
                        <div class="gap-x-3 md:gap-x-5 gap-y-2 md:gap-y-3">
                            <div>
                                <h3 class="font-mono font-600 text-mono-14 mb-1">Contact Information</h3>
                                <p>Orders, Billing, Shipping, General Questions & Wholesale Enquiries:</p>
                                <p>bristrotea@gmail.com</p>
                            </div>
                            <div class="flex-grow">
                                <h3 class="font-mono font-600 text-mono-14 mb-half">Socials</h3>
                                <ul>
                                    <li class="flex justify-start mb-half">
                                        <div class="relative flex justify-start items-center">
                                            <div class="w-[14px] h-[14px] mr-1"><svg class="block mx-auto" width="8"
                                                    height="14" viewBox="0 0 8 14">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M4.99792 14V7.61398H7.26817L7.60806 5.12519H4.99792V3.53621C4.99792 2.81564 5.20981 2.32462 6.3042 2.32462L7.7 2.324V0.0980563C7.45853 0.0677806 6.63002 0 5.66611 0C3.65368 0 2.27601 1.15981 2.27601 3.2898V5.12519H0V7.61398H2.27601V14H4.99792Z"
                                                        fill="currentColor"></path>
                                                </svg></div><a _key="f1346f3b55e8"
                                                class="pt-[2px] text-mono-14 font-mono link-underline-hover link-cover"
                                                title="Facebook" target="_blank" rel="noopener noreferrer"
                                                href="https://www.facebook.com/plantea">Facebook</a>
                                        </div>
                                    </li>
                                    <li class="flex justify-start mb-half">
                                        <div class="relative flex justify-start items-center">
                                            <div class="w-[14px] h-[14px] mr-1"><svg class="block mx-auto" width="14"
                                                    height="14" viewBox="0 0 14 14">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M7.00001 0C5.09891 0 4.86053 0.0080581 4.11391 0.0421244C3.36884 0.0761073 2.85999 0.19445 2.41473 0.367505C1.95442 0.546367 1.56405 0.78572 1.17487 1.17487C0.78572 1.56405 0.546367 1.95442 0.367505 2.41473C0.19445 2.85999 0.0761073 3.36884 0.0421244 4.11391C0.0080581 4.86053 0 5.09891 0 7.00001C0 8.90109 0.0080581 9.13947 0.0421244 9.88609C0.0761073 10.6312 0.19445 11.14 0.367505 11.5853C0.546367 12.0456 0.78572 12.436 1.17487 12.8251C1.56405 13.2143 1.95442 13.4536 2.41473 13.6325C2.85999 13.8056 3.36884 13.9239 4.11391 13.9579C4.86053 13.9919 5.09891 14 7.00001 14C8.90109 14 9.13947 13.9919 9.88609 13.9579C10.6312 13.9239 11.14 13.8056 11.5853 13.6325C12.0456 13.4536 12.436 13.2143 12.8251 12.8251C13.2143 12.436 13.4536 12.0456 13.6325 11.5853C13.8056 11.14 13.9239 10.6312 13.9579 9.88609C13.9919 9.13947 14 8.90109 14 7.00001C14 5.09891 13.9919 4.86053 13.9579 4.11391C13.9239 3.36884 13.8056 2.85999 13.6325 2.41473C13.4536 1.95442 13.2143 1.56405 12.8251 1.17487C12.436 0.78572 12.0456 0.546367 11.5853 0.367505C11.14 0.19445 10.6312 0.0761073 9.88609 0.0421244C9.13947 0.0080581 8.90109 0 7.00001 0ZM7.00021 1.26146C8.86927 1.26146 9.09068 1.2686 9.8288 1.30228C10.5113 1.3334 10.8819 1.44743 11.1286 1.5433C11.4553 1.67028 11.6885 1.82197 11.9335 2.06693C12.1784 2.31187 12.3301 2.54506 12.4571 2.8718C12.553 3.11846 12.667 3.48911 12.6981 4.1716C12.7318 4.90972 12.7389 5.13112 12.7389 7.00021C12.7389 8.86927 12.7318 9.09068 12.6981 9.8288C12.667 10.5113 12.553 10.8819 12.4571 11.1286C12.3301 11.4553 12.1784 11.6885 11.9335 11.9335C11.6885 12.1784 11.4553 12.3301 11.1286 12.4571C10.8819 12.553 10.5113 12.667 9.8288 12.6981C9.09079 12.7318 8.86941 12.7389 7.00021 12.7389C5.13098 12.7389 4.90964 12.7318 4.1716 12.6981C3.48911 12.667 3.11846 12.553 2.8718 12.4571C2.54506 12.3301 2.31187 12.1784 2.06693 11.9335C1.822 11.6885 1.67028 11.4553 1.5433 11.1286C1.44743 10.8819 1.3334 10.5113 1.30228 9.8288C1.2686 9.09068 1.26146 8.86927 1.26146 7.00021C1.26146 5.13112 1.2686 4.90972 1.30228 4.1716C1.3334 3.48911 1.44743 3.11846 1.5433 2.8718C1.67028 2.54506 1.82197 2.31187 2.06693 2.06693C2.31187 1.82197 2.54506 1.67028 2.8718 1.5433C3.11846 1.44743 3.48911 1.3334 4.1716 1.30228C4.90972 1.2686 5.13112 1.26146 7.00021 1.26146ZM3.40521 7.00027C3.40521 5.01501 5.01455 3.40566 6.99981 3.40566C8.98505 3.40566 10.5944 5.01501 10.5944 7.00027C10.5944 8.98551 8.98505 10.5948 6.99981 10.5948C5.01455 10.5948 3.40521 8.98551 3.40521 7.00027ZM7.00001 9.33333C5.71133 9.33333 4.66667 8.28867 4.66667 7.00001C4.66667 5.71133 5.71133 4.66667 7.00001 4.66667C8.28867 4.66667 9.33333 5.71133 9.33333 7.00001C9.33333 8.28867 8.28867 9.33333 7.00001 9.33333ZM10.7366 4.10357C11.2005 4.10357 11.5766 3.72751 11.5766 3.26358C11.5766 2.79966 11.2005 2.42357 10.7366 2.42357C10.2727 2.42357 9.89662 2.79966 9.89662 3.26358C9.89662 3.72751 10.2727 4.10357 10.7366 4.10357Z"
                                                        fill="currentColor"></path>
                                                </svg></div><a _key="ab2c02f4fbb9"
                                                class="pt-[2px] text-mono-14 font-mono link-underline-hover link-cover"
                                                title="Instagram" target="_blank" rel="noopener noreferrer"
                                                href="https://www.instagram.com/plantea">Instagram</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>