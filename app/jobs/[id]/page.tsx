import CompanyInfoCard from "@/components/company-info-card";
import JobPost from "@/components/job-post";
import { jobPostData } from "@/lib/data";

interface PageProps {
  params?: { [key: string]: string };
  query?: { [key: string]: string };
}

export default function Page(props: PageProps) {
  const { params } = props;

  if (!params?.id) {
    return <div>no id found</div>;
  }

  const [
    {
      company,
      logo,
      logoBackground,
      website,
      contract,
      postedAt,
      location,
      description,
      requirements,
      role,
      apply,
      position,
    },
  ] = jobPostData.filter((job) => job.id === parseInt(params?.id));

  return (
    <>
      <CompanyInfoCard
        companyInfo={{ company, logo, logoBackground, website }}
      />
      <JobPost
        jobPost={{
          company,
          position,
          contract,
          postedAt,
          location,
          description,
          requirements,
          role,
          apply,
        }}
      />
    </>
  );
}
