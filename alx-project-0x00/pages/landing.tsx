import Button from "@/components/Button";
import Card from "@/components/Card";
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">
        <Card />
      </h1>
      <div className="p-6 space-y-4">
        <h1 className="text-2xl font-bold">Reusable Buttons</h1>

        {/* Size variations */}
        <div className="flex gap-4">
          <Button title="Small" styles="text-sm px-2 py-1" />
          <Button title="Medium" styles="text-base px-4 py-2" />
          <Button title="Large" styles="text-lg px-6 py-3" />
        </div>

        {/* Shape variations */}
        <div className="flex gap-4">
          <Button title="Rounded-sm" styles="rounded-sm" />
          <Button title="Rounded-md" styles="rounded-md" />
          <Button title="Rounded-full" styles="rounded-full" />
          <Button title="Rounded-lg" styles="rounded-lg" />
        </div>
      </div>
    </div>
  );
};
export default Landing;
