import CardToDo from "./CardToDo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Day20() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-2xl font-bold">Boards</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="flex font-bold items-center gap-1">
            To do{" "}
            <FontAwesomeIcon
              className="font-light text-slate-500"
              icon={faPlus}
              width={10}
              height={10}
            />
          </h1>
          <CardToDo
            priority="HIGH"
            date="2/15/24"
            image="sphere1.jpg"
            title="Update Website Homepage"
            paragraph="Revise the content and the layout of the homepage to highlight new
        features and improve user engagement."
            peoples={["avatar11.jpg", "avatar22.jpg"]}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="flex font-bold items-center gap-1">
            In progress{" "}
            <FontAwesomeIcon
              className="font-light text-slate-500"
              icon={faPlus}
              width={10}
              height={10}
            />
          </h1>
          <CardToDo
            priority="LOW"
            date="2/13/24"
            title="Bug Fix - User Registration"
            paragraph="Investigate and resolve the reported bug in the user registration process where some users are unable to sign up."
            peoples={["avatar33.jpg"]}
          />
          <CardToDo
            priority="MEDIUM"
            date="2/08/24"
            image="watercolor1.jpg"
            title="Social Media Campaign"
            paragraph="Plan and execute a social media campaign for the upcoming product launch in February, including creating posts and scheduling updates."
            peoples={["avatar44.jpg", "avatar55.jpg"]}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="flex font-bold items-center gap-1">
            Under Review{" "}
            <FontAwesomeIcon
              className="font-light text-slate-500"
              icon={faPlus}
              width={10}
              height={10}
            />
          </h1>
          <CardToDo
            priority="HIGH"
            date="2/11/24"
            title="Mobile App Feature - Push Notification"
            paragraph="Implement push ntification feature for the mobile app to enhance user engagement. Ensure compatibility with both iOS and Android platforms."
            peoples={["avatar33.jpg"]}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="flex font-bold items-center gap-1">
            Done{" "}
            <FontAwesomeIcon
              className="font-light text-slate-500"
              icon={faPlus}
              width={10}
              height={10}
            />
          </h1>
          <CardToDo
            priority="LOW"
            date="2/09/24"
            title="Content Creation - Blog Post"
            paragraph="Write and publish a blogpost about industry trends and their impact on our products/services. Include relevant visuals and SEO optimisation."
            peoples={["avatar44.jpg"]}
          />
          <CardToDo
            priority="MEDIUM"
            date="2/07/24"
            image="watercolor2.jpg"
            title="IT Security Audit"
            paragraph="Write and publish a blogpost about industry trends and their impact on our products/services. Include relevant visuals and SEO optimisation."
            peoples={["avatar22.jpg"]}
          />
        </div>
      </div>
    </div>
  );
}
