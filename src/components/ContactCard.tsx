"use client";

import { Contact } from "@/types/contact";

interface ContactCardProps {
  contact: Contact;
}

export default function ContactCard({ contact }: ContactCardProps) {
  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const avatarDisplay = contact.avatar || getInitials(contact.name);

  const gradients = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-pink-500 to-rose-500",
    "from-emerald-500 to-teal-500",
    "from-amber-500 to-orange-500",
    "from-indigo-500 to-purple-500",
    "from-red-500 to-pink-500",
    "from-cyan-500 to-blue-500",
    "from-violet-500 to-purple-500",
    "from-fuchsia-500 to-pink-500",
  ];

  const colorIndex = contact.name.charCodeAt(0) % gradients.length;
  const avatarGradient = gradients[colorIndex];

  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
      <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 border border-white/20 dark:border-gray-700/50 transform hover:-translate-y-2 hover:scale-[1.02]">
        <div className="flex items-start space-x-5">
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${avatarGradient} rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
            <div className={`relative w-20 h-20 bg-gradient-to-br ${avatarGradient} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
              {avatarDisplay}
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
          </div>
          <div className="flex-1 min-w-0 pt-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 truncate group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 animate-fade-in">
              {contact.name}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center group/email">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg mr-3 group-hover/email:bg-blue-100 dark:group-hover/email:bg-blue-900/50 transition-colors">
                  <svg
                    className="w-4 h-4 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium truncate">{contact.email}</span>
              </div>
              <div className="flex items-center group/phone">
                <div className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded-lg mr-3 group-hover/phone:bg-purple-100 dark:group-hover/phone:bg-purple-900/50 transition-colors">
                  <svg
                    className="w-4 h-4 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{contact.phone}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

