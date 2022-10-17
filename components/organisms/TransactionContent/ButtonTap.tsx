import cx from "classnames";

interface ButtonTapProps {
  title: string;
  active: boolean;
}

export default function ButtonTap(props: ButtonTapProps) {
  const { title, active } = props;
  const btnClass = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  });

  return (
    <a data-filter="*" href="#" className={btnClass}>
      {title}
    </a>
  );
}
