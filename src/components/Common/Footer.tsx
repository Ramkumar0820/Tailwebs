export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-16">
      <div className="max-w-600 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              We provide innovative solutions for your business needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>
                <a href="/" className="hover:text-[#FFC50B] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-[#FFC50B] transition">
                  About
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:text-[#FFC50B] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm">Email: info@example.com</p>
            <p className="text-gray-400 text-sm">Phone: +1 (555) 000-0000</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-6" />

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
