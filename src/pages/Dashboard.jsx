import MainDashboard from "../components/dashboard/MainDashboard";
import TopNav from "../components/dashboard/TopNav";
import Footer from "../components/dashboard/Footer";
// import Chatmod from '../components/ChatModa';

function Dashboard() {
  return (
    <div>
      <TopNav />
      <div className="ugo--dashboard-ugo">
        <MainDashboard />
      </div>
      {/* <Chatmod /> */}
      <Footer />
    </div>
  );
}

export default Dashboard;
