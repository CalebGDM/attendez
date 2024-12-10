import { useEffect, useState } from "react";
import clases from "../data/clases";
import QRCode from "react-qr-code";
import { ClassType } from "../types";
import { generateClient, GraphQLResult } from "aws-amplify/api";
import { listClasses } from "../graphql/queries";

function Class() {
  const [classes, setClasses] = useState<ClassType[]>();
  const [currentClassID, setCurrentClassID] = useState<string>(classes ? classes[0].id : clases[0].id);
  const [currentClass, setCurrentClass] = useState<ClassType | undefined>(
    clases[0]
  );
  const [active, setActive] = useState<boolean>(false);
  const [newClass, setNewClass] = useState<boolean>(false);
  const client = generateClient();
  const handleCurrentClass = (id: string) => {
    setCurrentClassID(id);
    setCurrentClass(clases.find((currCalss) => currCalss.id == currentClassID));
  };

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response: GraphQLResult<{
          listClasses: { items: ClassType[] };
        }> = await client.graphql({
          query: listClasses,
        });
        const fetchedClasses = response.data?.listClasses?.items || []
        setClasses(fetchedClasses);
      } catch (e) {
        console.error(e);
      }
    };
    fetchClasses();
  }, []);
  console.log(classes)
  return (
    <div>
      <h1>Clases</h1>
      <button onClick={() => setNewClass(!newClass)}>Crear clase</button>
      <div className={newClass ? "qrActive" : "qr"}>
        <label>Nombre:</label>
        <input type="text" />
        <label>Descripción:</label>
        <input type="text" />
        <div>
          <label>Días:</label>
          <label>Lunes</label>
          <input type="checkbox" value={1} />
          <label>Martes</label>
          <input type="checkbox" value={2} />
          <label>Miércoles</label>
          <input type="checkbox" value={3} />
          <label>Jueves</label>
          <input type="checkbox" value={4} />
          <label>Viernes</label>
          <input type="checkbox" value={5} />
        </div>
        <label>Hora de inicio:</label>
        <input type="time" />
        <label>Grado:</label>
        <input type="text" />
        <label>Grupo:</label>
        <input type="text" />
        <button>Guardar</button>
      </div>
      <div>
        <div>
          {classes ? classes.map((classItem) => (
            <button onClick={() => handleCurrentClass(classItem.id)}>
              {classItem.name}
            </button>
          )) : null}
        </div>
        <div>
          <h3>{}</h3>
          <div>
            <button onClick={() => setActive(!active)}>QR</button>
            <div className={active ? "qrActive" : "qr"}>
              <QRCode
                value={`https://main.d3q6e59e6emvz.amplifyapp.com/student/${
                  currentClass ? currentClass.id : "0000"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Class;
