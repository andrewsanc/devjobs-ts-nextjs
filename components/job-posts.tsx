import JobPostCard from "@/components/job-post-card";
import { jobPostData } from "@/lib/data";

export default function JobPosts() {
  return (
    <div className='flex flex-wrap justify-center gap-4 mt-20'>
      {jobPostData.map((jobPost) => (
        <JobPostCard jobPost={jobPost} key={jobPost.id} />
      ))}
    </div>
  );
}
