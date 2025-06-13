export default function About() {
  return (
    <div className="p-6 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">About Me</h1>
      <p className="text-lg mb-4">
        👋 Hi, I'm <strong>Aman Kumar</strong>, a passionate <strong>.NET Developer</strong> based in Gurugram, India, with over 3 years of experience in software development.
        I specialize in creating scalable, robust applications using the Microsoft technology stack.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-blue-600">Skills</h2>
      <ul className="list-disc list-inside grid grid-cols-2 gap-1 mt-2 text-md">
        <li>.NET Core</li><li>ASP.NET MVC</li><li>REST API</li><li>SQL Server</li>
        <li>Entity Framework Core</li><li>JavaScript</li><li>OOPS</li><li>Multi-Threading</li>
        <li>Design Patterns</li><li>Agile Methodology</li><li>Azure DevOps</li><li>Dependency Injection</li>
        <li>Client Support</li><li>Git</li><li>IIS</li><li>Visual Studio</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-blue-600">Certifications</h2>
      <ul className="list-disc list-inside mt-2">
        <li>Complete Guide to ASP.NET Core MVC (.NET 8) [E-Commerce App]</li>
        <li>RESTful Web API - The Complete Guide (.NET 7 API)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-blue-600">Work Experience</h2>
      <div className="mt-2 space-y-4">
        <div>
          <strong>Software Developer – TimeWatch Infocom Pvt Ltd</strong><br />
          <em>Feb 2022 – Sep 2024</em>
        </div>
        <div>
          <strong>Dot Net Developer – Kellton Tech Solutions Pvt Ltd</strong><br />
          <em>Nov 2024 – Present</em><br />
          <ul className="list-disc list-inside ml-4">
            <li>Migrated legacy projects to .NET 8 for performance boost.</li>
            <li>Utilized Azure DevOps for version control and CI/CD pipelines.</li>
            <li>Provided production support ensuring smooth operations.</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6 text-blue-600">Projects</h2>
      <div className="mt-2 space-y-4">
        <div>
          <strong>Hathway (8 Months)</strong> — Broadband & DTH Services Support
          <ul className="list-disc list-inside ml-4">
            <li>Created and integrated new APIs.</li>
            <li>Resolved UI/API bugs and handled database updates.</li>
            <li>Stack: C#, ASP.NET Framework, SQL Server, JavaScript</li>
          </ul>
        </div>
        <div>
          <strong>HRMS2 (11 Months)</strong> — HR System for Karnataka Govt.
          <ul className="list-disc list-inside ml-4">
            <li>Developed modules and APIs using .NET Core and MVC.</li>
            <li>Worked with Oracle SQL Server and created multiple SPs.</li>
          </ul>
        </div>
        <div>
          <strong>Sun Pharma (8 Months)</strong> — Insurance Portal
          <ul className="list-disc list-inside ml-4">
            <li>Implemented UI and APIs for insurance claims and updates.</li>
            <li>Supported production-level development and issue resolution.</li>
          </ul>
        </div>
        <div>
          <strong>Integrated Attendance System (6 Months)</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Migrated legacy app to .NET 8, applied SOLID principles.</li>
            <li>Implemented JWT, audit logs, exception handling, and biometric integrations.</li>
          </ul>
        </div>
        <div>
          <strong>ERP System (4 Months)</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Created REST APIs and implemented JWT and audit logs.</li>
            <li>Focused on customer support and sales automation.</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6 text-blue-600">Education</h2>
      <p className="mt-2">
        <strong>B.Tech in Computer Science</strong> – Dronacharya College of Engineering, Greater Noida (2022)<br />
        <em>Marks: 71%</em>
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-blue-600">Languages</h2>
      <p className="mt-2">English, Hindi</p>
    </div>
  );
}
