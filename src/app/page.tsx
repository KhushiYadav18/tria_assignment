"use client";

import { useState, useMemo } from "react";
import { Contact } from "@/types/contact";
import { initialContacts } from "@/data/mockContacts";
import SearchBar from "@/components/SearchBar";
import ContactList from "@/components/ContactList";
import AddContactModal from "@/components/AddContactModal";

export default function Home() {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredContacts = useMemo(() => {
    if (!searchQuery.trim()) {
      return contacts;
    }

    const query = searchQuery.toLowerCase().trim();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(query)
    );
  }, [contacts, searchQuery]);

  const handleAddContact = (newContact: Omit<Contact, "id">) => {
    const contact: Contact = {
      ...newContact,
      id: Date.now().toString(),
    };
    setContacts((prev) => [contact, ...prev]);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-indigo-950 dark:via-purple-950 dark:to-pink-950">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-12 max-w-7xl">
        <header className="text-center mb-16">
          <div className="inline-block mb-6 animate-slide-in-left">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
            <h1 className="relative text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">
              <span className="animate-text-gradient inline-block">
                Contact List
              </span>
            </h1>
          </div>
          <div className="flex items-center justify-center gap-2 mb-4 animate-slide-in-right">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-fade-in"></div>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium animate-fade-in-up">
              Manage your contacts with elegance
            </p>
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-fade-in"></div>
          </div>
        </header>

        <div className="mb-10 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="w-full sm:flex-1">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search contacts by name..."
            />
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/50 dark:hover:shadow-purple-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100"></div>
            <svg
              className="w-6 h-6 relative z-10 transform group-hover:rotate-90 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="relative z-10 text-lg">Add Contact</span>
          </button>
        </div>

        <div className="mb-6 flex items-center justify-between animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full animate-fade-in"></div>
            <p className="text-gray-700 dark:text-gray-300 font-semibold text-lg">
              {filteredContacts.length === contacts.length
                ? `Total Contacts: ${contacts.length}`
                : `Found ${filteredContacts.length} of ${contacts.length} contacts`}
            </p>
          </div>
        </div>

        <ContactList contacts={filteredContacts} />

        <AddContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddContact}
        />
      </div>
    </div>
  );
}

