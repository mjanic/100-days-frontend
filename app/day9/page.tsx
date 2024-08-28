import Checklist from "./Checklist";
import PrepInfoWithIcons from "./PrepInfoWithIcons";
import TitleWithRating from "./TitleWithRating";

export default function Day8() {
  return (
    <div className="flex relative">
      <div className="relative h-[100vh] bg-[url('/iced-coffee.jpg')] bg-cover w-[50%] bg-center">
        <div className="absolute bottom-5 left-0 w-[40%] p-2 bg-black">
          <h1 className="text-xs font-bold text-white">
            SWEET ICED COFFEE WITH COCONUT MILK
          </h1>
        </div>
      </div>
      <TitleWithRating />
      <div className="h-[100vh] w-[50%] mt-[120px] p-4">
        <PrepInfoWithIcons />
        <div className="py-2 mb-4">
          <p className="text-[10px] font-bold italic">
            Sweet Iced Coffee with coconut milk is easy to make and stores well
            in the fridge.
          </p>
          <p className="text-[10px] font-bold italic">
            Make a large batch and save yourself a few trips to the coffee shop
          </p>
        </div>
        <h1 className="text-sm my-4 font-bold">INGREDIENTS</h1>
        <Checklist />
        <h1 className="text-sm my-4 font-bold">INSTRUCTIONS</h1>
        <ol className="text-[10px] font-medium leading-[20px]">
          <li>1. Boil some water and let sit for 1 to 2 minutes.</li>
          <li>
            2. Put the coffee grounds into a cafetiere and pour in the water.
          </li>
          <li>
            3. Let the coffee steep for 5 minutes then slowly press down the
            plunger on your cafetiere.
          </li>
          <li>
            4. Pour the coffee into a jug, allow to cool then chill for several
            hours.
          </li>
          <li>
            5. Whisk in the coconut milk and condensed milk and serve over
            plenty of ice.
          </li>
          <li>
            6. This coffee can be stored in the fridge for up to 5 days. Shake
            or steer again before serving.
          </li>
        </ol>
      </div>
    </div>
  );
}
