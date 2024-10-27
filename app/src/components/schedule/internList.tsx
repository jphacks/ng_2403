import { Card } from "@/components/ui/card";

export function InternTermList() {
  const internTerms = [
    { name: "sky", start_date: "2024-10-26", end_date: "2024-10-30" },
    { name: "sky", start_date: "2024-10-26", end_date: "2024-10-30" },
  ];
  return (
    <>
      {internTerms.map((internTerm, index) => (
        <a href={`./schedule/${internTerm.name}`} key={index}>
          <Card className="max-w-2xl m-auto">
            <div className="flex py-2 px-8 ">
              <div className="items-center">
                <p>{internTerm.start_date.split("-")[2]}</p>
                <p className="flex justify-center">≀</p>
                <p>{internTerm.end_date.split("-")[2]}</p>
              </div>
              <div className="flex flex-col justify-center m-auto">
                {internTerm.name}
              </div>
            </div>
          </Card>
        </a>
      ))}
    </>
  );
}
