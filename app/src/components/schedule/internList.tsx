import { Card } from "@/components/ui/card";
import readManyInternships from "@/lib/function/dao/readManyInternships";

export async function InternTermList({ uid }: Readonly<{ uid: string }>) {
  console.log(uid);

  const interships = await readManyInternships(uid);

  console.log(interships);

  const internship_list = [];

  for (const internship of interships?.getInternships() || []) {
    internship_list.push({
      name: internship.getTitle(),
      start_date: internship.getInternTerm().getStart(),
      end_date: internship.getInternTerm().getEnd(),
    });
  }

  return (
    <>
      {internship_list.map((internTerm, index) => (
        <a href={`./schedule/${internTerm.name}`} key={index}>
          <Card className="max-w-2xl m-auto">
            <div className="flex py-2 px-8 ">
              <div className="items-center">
                <p>{internTerm.start_date.split("-")[2]}</p>
                <p className="flex justify-center">≀</p>
                <p>{internTerm.end_date.split("-")[2]}</p>
              </div>
              <div className="flex flex-col justify-center m-auto">
                {internship}
              </div>
            </div>
          </Card>
        </a>
      ))}
    </>
  );
}
