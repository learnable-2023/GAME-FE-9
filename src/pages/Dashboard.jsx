import TopNav from "../components/dashboard/TopNav";
import MainDashboard from "../components/dashboard/MainDashboard";
import Footer from "../components/dashboard/Footer";

function Dashboard() {
  return (
    <div className="ugo-dashboard">
      <TopNav />
      <MainDashboard />
      <Footer />
    </div>
  );
}

export default Dashboard;
