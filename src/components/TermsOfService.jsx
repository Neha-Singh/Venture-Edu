import React from "react";
import "../styles/termsofservices.css";

const TermsOfUse = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    console.log("Overlay clicked – closing modal");
    onClose();
  };

  const handleContentClick = (e) => {
    // Prevent closing when clicking inside the modal content.
    e.stopPropagation();
  };

  return (
    <div className="tou-modal-overlay" onClick={handleOverlayClick}>
      <div className="tou-modal-content" onClick={handleContentClick}>
        <div className="tou-modal-header">
          <h2>Terms of Use</h2>
          <button type="button" className="tou-modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="tou-modal-body">
          <p>
            Your access to, and browsing, review and use of the Site is subject
            to these Terms of Use and all applicable laws. By accessing and
            using the Site, you accept these Terms of Use, without limitation or
            qualification. If you do not agree to the Terms of Use, do not use
            the Site. If, at any time, any part of the Terms of Use is no longer
            acceptable to you, immediately terminate your use of the Site.
          </p>
          <p>
            All content and functionality on the Site, including text, graphics,
            logos, icons, images, and videos and the selection and arrangement
            thereof, in addition to any concepts, know-how, tools, frameworks,
            software, applications or other technology, algorithms, models,
            processes, and industry perspectives underlying or embedded in the
            foregoing, along with any enhancements to or derivative works
            thereof (the “Site Content”) is the exclusive property of Venturedu
            Private Limited. Neither the Site Content nor functionality of the
            Site, may be copied, reproduced, modified, reverse engineered,
            altered (including the removal or disabling of any security or
            technological safeguards, disclaimers, or legends) uploaded,
            published, posted, transmitted, or distributed in any way without
            our written permission, except for those uses specified in the
            following paragraph.
          </p>
          <p>
            Venturedu Private Limited hereby grants you a limited,
            non-exclusive, non-transferable, revocable license for the term
            hereof to access and download, display, and print one copy of the
            Site Content on any single computer solely for your internal,
            business use, provided that you do not modify the Site Content in
            any way (including creating derivative works thereof), that you
            retain all copyright and other proprietary notices displayed on the
            Site Content, and that you otherwise comply with these Terms. You
            may not otherwise reproduce, modify, reverse engineer, distribute,
            transmit, post, or disclose the Site Content without Venturedu
            Private Limited’s prior written consent. The license granted herein
            terminates automatically and immediately if you do not comply with
            all the terms.
          </p>
          <p>
            All research, data, opinions, estimates, frameworks and other
            content on the Site has been provided in good faith, and is only
            valid on the date of the publication. The content and functionality
            is provided with the understanding that Venturedu Private Limited is
            not herein engaged in rendering professional advice or services to
            you, no Site content is intended to serve as or shall be deemed
            investment, legal, tax, accounting or other regulated advice, and
            that you shall remain solely responsible for your use of all Site
            content and acknowledge that any reliance upon the Site content
            shall be entirely at your sole option and risk.
          </p>
          <p>
            All content and functionality on the Site is provided “as is,”
            without warranty of any kind, either express or implied, including,
            without limitation, implied warranties of merchantability and
            fitness for a particular purpose. Venturedu Private Limited makes no
            warranties, express or implied, as to the ownership, accuracy, or
            adequacy of the Site content. Venturedu Private Limited shall have
            no liability or responsibility for any information published on
            linked websites, contained in any user submissions published on the
            Site, or provided by third parties.
          </p>
          <p>
            Venturedu Private Limited shall not be liable for any indirect,
            incidental, consequential, or punitive damages or losses or for lost
            revenues or profits, whether or not advised of the possibility of
            such damages or losses and regardless of the theory of liability.
          </p>
          <p>
            You hereby indemnify, defend, and hold harmless Venturedu Private
            Limited and all of its predecessors, successors, parents,
            subsidiaries, affiliates, officers, directors, shareholders,
            investors, employees, agents, representatives, and attorneys and
            their respective heirs and successors from and against any and all
            liability, expenses, costs, or losses.
          </p>
          <p>
            Venturedu Private Limited does not represent or endorse the accuracy
            or reliability of information posted to the Site by users. In
            addition, we do not and cannot review all information posted to the
            Site by users and are not responsible for such information. However,
            Venturedu Private Limited reserves the right to refuse to post and
            the right to remove any information, in whole or in part, for any
            reason or for no reason.
          </p>
          <p>
            Venturedu Private Limited might often refer to reports, data,
            industry insights (“External Information”) by other organizations
            with clear attribution under the fair use policy. Venturedu Private
            Limited is not responsible for the accuracy, adequacy or
            completeness of the afore-mentioned External Information. Venturedu
            Private Limited prohibits the posting of any information that
            infringes or violates the copyright rights and/or other intellectual
            property rights of any person or entity. If you believe that your
            intellectual property right (or such a right that you are
            responsible for enforcing) is infringed by any content on the Site,
            please write to Venturedu Private Limited at info@venturedu.com,
            clearly highlighting the content on the Site which is in supposed
            violation, the details of the copyrighted material said to be
            infringed and contact details of the owner of the said material.
          </p>
          <p>
            Venturedu Private Limited may aggregate Personal Information and
            disclose or use such data only in a non-personally identifiable
            manner (anonymously) for purposes of research, advertising, or
            comparison to organizations approved by Venturedu Private Limited.
          </p>
          <p>
            You agree and understand that your personal information shall be
            collected, processed, stored and used by us, and passed to other
            data processors for the services identified under this Privacy
            Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
