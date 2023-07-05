import { useRouter } from "next/router";

function DeveloperPage() {
  const router = useRouter();

  const developerId = router.query.developerId;
  let validId;
  const developers = [
    { id: 1, name: "Yash", role: "Senior Developer" },

    { id: 2, name: "Vaibhav", role: "Backend Developer" },

    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  let content;
  developers.map((developer) => {
    if (developer.id === Number(developerId)) {
      validId = true;
      content = (
        <h1>
          Name : {developer.name} Role : {developer.role}
        </h1>
      );
    }
  });
  if (!validId) {
    content = <h1>Developer doesn't exist</h1>;
  }
  return <>{content}</>;
}

export default DeveloperPage;
