import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <div className="flex justify-between bg-white p-4 shadow">
      <img src="/img/logo.png" className="h-10" />
      <TopMenuItem title="Booking" pageRef="/booking" />
    </div>
  );
}
