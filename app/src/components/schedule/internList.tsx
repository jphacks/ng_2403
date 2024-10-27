import { Card } from "@/components/ui/card";
import readManyInternships from "@/lib/function/dao/readManyInternships";

function formatDateWithIntl(date) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    month: "2-digit",
    day: "2-digit",
  });
  return formatter.format(date).replace(/-/g, "/");
}

export async function InternTermList({ uid }: Readonly<{ uid: string }>) {
  console.log(uid);

  const interships = await readManyInternships(uid);

  const internship_list = [];

  for (let i = 0; i < interships.length; i++) {
    const internship = interships[i];
    console.log(internship);
    internship_list.push({
      name: internship.getTitle(),
      start_date: formatDateWithIntl(
        new Date(parseInt(internship.getInternTerm().getStart(), 10) * 1000)
      ),
      end_date: formatDateWithIntl(
        new Date(parseInt(internship.getInternTerm().getEnd(), 10) * 1000)
      ),
      place: internship.getSchedules()[0].getPlaces(),
    });
  }

  console.log(internship_list);

  return (
    <>
      {internship_list.map((internTerm, index) => (
        <a href={`./schedule/${internTerm.name}`} key={index}>
          <Card className="max-w-2xl m-auto">
            <div className="flex py-2 px-8 ">
              <div className="items-center">
                <p>{internTerm.name}</p>

                <p className="flex justify-center">≀</p>
                <p>{internTerm.end_date}</p>
                <p>経由駅</p>
                {internTerm.place.map((place, index) => (
                  <p key={index}>{place.getName()}</p>
                ))}
              </div>
              <div className="flex flex-col justify-center m-auto">
                {internTerm.start_date}
              </div>
            </div>
          </Card>
        </a>
      ))}
    </>
  );
}
