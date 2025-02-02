type ViewState = "planner" | "routes" | "details" | "station";

const RouteView = ({ setActiveView }: { setActiveView: (view: ViewState) => void }) => {
    const routes = [
      { id: 1, name: "Route 1", duration: "20 min" },
      { id: 2, name: "Route 2", duration: "25 min" },
    ];
  
    return (
      <div>
        <h2 className="text-lg font-bold">Available Routes</h2>
        <ul>
          {routes.map((route) => (
            <li key={route.id} className="p-2 border-b" onClick={() => setActiveView("details")}>
              {route.name} - {route.duration}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RouteView;
  