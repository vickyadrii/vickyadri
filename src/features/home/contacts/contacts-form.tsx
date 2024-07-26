import ButtonIcon from "@/components/ui/button-icon/button-icon";
import { getAssetUrl } from "@/lib/utils";
import React from "react";

const ContactsForm = () => {
  return (
    <form autoComplete="off" className="space-y-6">
      <div className="md:space-y-14 space-y-4">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="md:text-xl text-base">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-transparent border-b-2 border-b-primary-dark-600 outline-none pb-2 md:text-base text-sm focus:border-b-primary-dark-500 transition-all duration-150 ease-in"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="md:text-xl text-base">
              Email
            </label>
            <input
              type="text"
              id="name"
              className="bg-transparent border-b-2 border-b-primary-dark-600 outline-none pb-2 md:text-base text-sm focus:border-b-primary-dark-500 transition-all duration-150 ease-in"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="md:text-xl text-base">
            Your Message
          </label>
          <textarea
            id="name"
            className="bg-transparent border-b-2 border-b-primary-dark-600 outline-none pb-2 md:text-base text-sm focus:border-b-primary-dark-500 transition-all duration-150 ease-in resize-none"
            rows={4}
          />
        </div>
      </div>

      <ButtonIcon icon={getAssetUrl("/icons/ic_telegram.svg")}>Send Message</ButtonIcon>
    </form>
  );
};

export default ContactsForm;