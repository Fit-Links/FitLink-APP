import { IconNames } from "@/components/icon";

export type TabName = "캘린더" | "회원" | "알림" | "마이페이지";

export type TabProps = {
  readonly name: TabName;
  readonly url: string;
  readonly icon: IconNames;
};
