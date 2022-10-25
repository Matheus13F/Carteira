import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function Pagination() {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 0;

  return (
    <div>
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.start}&start=${startIndex - 10}`}
        >
          <a>
            <FiArrowLeft className="h5" />
            <p>Previous</p>
          </a>
        </Link>
      )}
      <Link
        href={`/search?term=${router.query.start}&start=${startIndex + 10}`}
      >
        <a>
          Next
          <FiArrowRight className="h5" />
        </a>
      </Link>
    </div>
  );
}

export default Pagination;
