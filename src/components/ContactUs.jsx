import React from 'react';
import { Mail, MapPinned, PhoneCall} from 'lucide-react';

const ContactUs = () => {
    return (
        <div className='w-full text-primary py-12 md:py-20 px-4 md:px-5 lg:px-0'>
            <div className='max-w-5xl mx-auto'>
                <div className='text-center mb-12'>
                    <h1 className='text-4xl md:text-5xl font-bold mb-4 text-blue-500'>Contact Us</h1>
                    <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                        Shree Kundule Secondery school love to hear from you! Reach out with any questions or inquiries.
                    </p>
                </div>

                <div className='flex flex-col lg:flex-row gap-12'>
                    {/* Left Column - Contact Info + Map */}
                    <div className='lg:w-1/2 w-full space-y-8'>
                        {/* Contact Info */}
                        <div className='space-y-6'>
                            <div className='flex gap-4 items-start'>
                                <span className='mt-1'>
                                    <MapPinned className='text-white bg-blue-600 rounded-full p-1 size-12 hover:scale-105 transition-transform duration-300' />
                                </span>
                                <div>
                                    <h3 className='text-xl font-semibold text-gray-800'>Our Location</h3>
                                    <p className='text-lg text-gray-600'>Ba. Na. Pa -4, Baglung, Nepal</p>
                                </div>
                            </div>
                            <div className='flex gap-4 items-start'>
                                <span className='mt-1'>
                                    <Mail className='text-white bg-blue-600 rounded-full p-1 size-12 hover:scale-105 transition-transform duration-300' />
                                </span>
                                <div>
                                    <h3 className='text-xl font-semibold text-gray-800'>Email Us</h3>
                                    <p className='text-lg text-gray-600 hover:text-blue-600 transition-colors'>
                                        <a href="mailto:info@kunduleschool.com">info@kunduleschool.com</a>
                                    </p>
                                </div>
                            </div>
                            <div className='flex gap-4 items-start'>
                                <span className='mt-1'>
                                    <PhoneCall className='text-white bg-blue-600 p-1 rounded-full size-12 hover:scale-105 transition-transform duration-300' />
                                </span>
                                <div>
                                    <h3 className='text-xl font-semibold text-gray-800'>Call Us</h3>
                                    <p className='text-lg text-gray-600 hover:text-blue-600 transition-colors'>
                                        <a href="tel:+9779876543210">+977 9876543210</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Embedded Google Map */}
                        <div className='mt-6 w-full rounded-xl overflow-hidden shadow-lg'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.2251119231973!2d83.58944857494423!3d28.29150419948636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995e280278f4d1d%3A0x83502ad555506070!2sShree%20Kundule%20Secondary%20School!5e0!3m2!1sen!2snp!4v1746768419973!5m2!1sen!2snp"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Kundule School Map"
                                className='hover:opacity-90 transition-opacity duration-300'
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className='lg:w-1/2 w-full'>
                        <form className='bg-white shadow-xl rounded-md p-8 space-y-6 border border-gray-100 hover:shadow-2xl transition-shadow duration-300'>
                            <div>
                                <label htmlFor='name' className='block text-lg font-medium mb-2 text-gray-700'>Full Name</label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    placeholder='Enter Your Name . . . '
                                    className='w-full border border-gray-200 rounded-md px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300'
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='block text-lg font-medium mb-2 text-gray-700'>Email Address</label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    placeholder='Enter Your Email . . . '
                                    className='w-full border border-gray-200 rounded-md px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300'
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor='subject' className='block text-lg font-medium mb-2 text-gray-700'>Subject</label>
                                <input
                                    type='text'
                                    id='subject'
                                    name='subject'
                                    placeholder='Enter Your Subject . . .'
                                    className='w-full border border-gray-200 rounded-md px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300'
                                />
                            </div>
                            <div>
                                <label htmlFor='message' className='block text-lg font-medium mb-2 text-gray-700'>Your Message</label>
                                <textarea
                                    id='message'
                                    name='message'
                                    rows='5'
                                    placeholder='Enter Your Query . . . '
                                    className='w-full border border-gray-200 rounded-md px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300'
                                    required
                                ></textarea>
                            </div>
                            <button
                                type='submit'
                                className='w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-md hover:shadow-lg'
                            >
                                Send Message
                                <span className='ml-2'>→</span>
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;