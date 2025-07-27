import { useQuery } from "@tanstack/react-query";
import { DummyData } from "../data/DummyData";
import SectionCard from "./SectionCard";
const fetchUser = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(DummyData), 500);
  });
};

const Section = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["section"],
    queryFn: () => fetchUser() as Promise<Record<string, any[]>>,
  });



  const renderSection = (title: string, items: any[]) => (
  
    <SectionCard title={title} items={items}/>
  );

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Something went wrong.</p>;

  return (
    <div className="p-4">
      {renderSection("Grocery & Kitchen", data?.Fruits || [])}
      {renderSection("Snacks & Drinks", data?.juices || [])}
      {renderSection("Statify Your Crisp Cravings", data?.Crisp || [])}
      {renderSection("Wholesome Meals", data?.meals || [])}
      {renderSection("Elevate Yourself", data?.Elevate || [])}
      {renderSection("Get Your Home Needs", data?.gadgetsData || [])}
      {renderSection("New In Store", data?.pedicureKitData || [])}
    </div>
  );
};
export default Section;
