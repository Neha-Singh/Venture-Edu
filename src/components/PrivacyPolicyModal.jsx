import React from "react";
import "../styles/privacypolicymodal.css";

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="privacy-modal-overlay" onClick={onClose}>
      <div
        className="privacy-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="privacy-modal-header">
          <h2>Privacy Policy</h2>
          <button className="privacy-modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="privacy-modal-body">
          <p>
            This Privacy Policy sets forth the reasonable security practices and
            procedures adopted by Venturedu Private Limited and shall apply to
            the use and disclosure and sharing of sensitive personal data or
            information (“Personal Information”) provided by the registered
            users of the Website www.venturedu.com (“Website”), which is owned,
            maintained, and operated by Venturedu Private Limited. This policy
            is equally applicable to the visitors/users on the Website.
          </p>
          <p>
            We value the trust you have placed with us. To provide you with a
            convenient and safe online experience, we have implemented measures
            to protect the confidentiality, integrity, and security of your
            Personal Information, during storage and transmission through the
            World Wide Web. This Privacy Policy explains how we protect personal
            Information provided by you through the Website and how we store and
            use that information, to deliver the services on the Website.
          </p>
          <p>
            By entering this Website and providing personal information when
            subscribing and sending enquiries to us, you expressly agree to this
            privacy policy. By entering this Website, you shall be treated as
            having given your consent to process your personal information as
            set out in the Privacy Policy.
          </p>
          <p>
            This Privacy Policy is in conformity with the Industry Standards and
            Practice, however, is subject to change at any time. It is advised
            that you review this Privacy Policy periodically. This Privacy
            Policy is also incorporated into and subject to the Terms of Use of
            the Website.
          </p>
          <h3>Personal Information</h3>
          <p>
            Personal information means any information that relates to a natural
            person, which directly or indirectly is capable of identifying that
            person.
          </p>
          <p>
            The personal information collected from you and covered within this
            Privacy Policy may include your full name, address, telephone/mobile
            number, email address, mobile number, Bank account number and other
            information as defined in Rule 3 of the Information Technology
            (Reasonable security practices and procedures and sensitive data or
            information) Rules, 2011, as may be required by us from time to time
            in order to provide services to you. However, you have the right to
            modify or update your personal Information/details with us.
          </p>
          <h3>Collection of Personal Information</h3>
          <p>
            Most features of the Website would require registration, which may
            require you to provide your details such as an email address, a
            password, mobile number and other information.
          </p>
          <p>
            In case, you avail the online services through venturedu.com, you
            will be required to provide Personal Information like your Name,
            Address, mobile, Bank Account Number and other information required
            as per applicable regulations (“user information”) at the time of
            registration/activation of such facility. The collection of these
            information is obligatory pursuant to regulatory requirements in
            order to activate and enable the online services. Such information
            shall be used/shared/maintained/accessed/stored with/by third party
            technology provider/authorised service providers in order to
            enable/facilitate/complete/process of online services. Any personal
            information collected from the user shall be encrypted for data
            security. The encryption protection is verified by SSL.
          </p>
          <p>
            From time to time, the Website may also request other personal
            information to provide you with additional benefits of the services
            as selected by you. On all such occasions, you will have the option
            to provide or decline to provide that personal information.
          </p>
          <p>
            In order to benefit from the full functionality of the services, you
            would need to provide your Account Credentials/Information to allow
            the Website, to provide an account aggregator service to access your
            account data from the financial institutions/banks where your
            accounts are maintained, to enable you to see a consolidated view of
            various accounts. All such Account Credentials/ Information and data
            collected from such accounts are stored by us on highly secured
            servers. The section “Your data is secure” shall describe the
            various security mechanisms followed for securing your data.
          </p>
          <p>
            You agree and understand that your personal information shall be
            collected, processed, stored and used by us, and passed to other
            data processors for the services identified under this Privacy
            Policy.
          </p>
          <h3>Use of Personal Information</h3>
          <p>
            The Website uses and discloses your Personal Information only as
            follows:
          </p>
          <ul>
            <li>
              To fulfill/complete your requests for products and services
              offered, subscribed or availed by you on the Website.
            </li>
            <li>
              To deliver to you any administrative notices, alerts and
              communications relevant to your use of the services.
            </li>
            <li>
              To any Governmental Authority including but not limited to the
              Reserve Bank of India.
            </li>
            <li>
              To Third Party Service Providers (including payment gateways) that
              provide services to Insurers.
            </li>
            <li>
              To any regulator for identifying the registered user for complying
              with regulatory Act.
            </li>
            <li>
              To comply with orders of the Court, any applicable law or any
              statutory or legal requirements or process.
            </li>
            <li>
              To analyze Website usage, improve features, tailor the Website to
              cater to your interests, and improve the services offered.
            </li>
            <li>
              For market research, troubleshooting problems, detecting, and
              protecting against error, fraud, hacking or cyber-crimes.
            </li>
            <li>
              For any of these purposes, we may use group companies/affiliates,
              third party vendors, agents, contractors, consultants or service
              providers. Such Third Party Service Providers are bound by privacy
              restrictions similar to those mentioned in this Privacy Policy.
            </li>
          </ul>
          <h3>Sharing and Disclosure of Personal Information</h3>
          <p>
            We will not disclose your Personal Information with any affiliated
            or unaffiliated third parties, except as stated below:
          </p>
          <ul>
            <li>To provide you the products and services.</li>
            <li>
              To enforce the terms and conditions of the products or services.
            </li>
            <li>For transaction processing and report generation.</li>
            <li>
              To protect the interests of Venturedu Private Limited, its
              affiliates, directors, officers, employees, representatives, and
              authorised agents.
            </li>
          </ul>
          <p>
            Venturedu Private Limited may aggregate Personal Information and
            disclose or use such data only in a non-personally identifiable
            manner (anonymously) for purposes of research, advertising, or
            comparison to organizations approved by Venturedu Private Limited.
          </p>
          <p>
            Notwithstanding anything above, portions of your data, consisting of
            aggregate data derived from your Account Credentials/Information,
            may remain on servers indefinitely. Your data may also remain on our
            backup servers. These backups are required to ensure our continued
            ability to provide services and comply with regulations.
          </p>
          <p>
            If you choose to deactivate your account, your data will be
            deactivated on our servers and no one except an authorised person
            shall have access to your account. However, you can reactivate your
            account at any time, with access provided only after your consent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
