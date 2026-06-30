import ServiceHealthCard from "../../../components/dashboard/infrastructure/service-health-card";
import EnvironmentsCard from "../../../components/dashboard/infrastructure/environments-card";

export default function Page() {
    return <>
        <ServiceHealthCard /> ;
        <EnvironmentsCard /> ;
    </>
}