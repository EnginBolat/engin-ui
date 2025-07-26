import PowerOnOff from './PowerOnOffIcon';
import Calendar from './CalendarIcon';
import Settings from './SettingsIcon';
import Person from './PersonIcon';
import Notification from './NotificationIcon';
import Lock from './LockIcon';
import Export from './ExportIcon';
import Edit from './EditIcon';
import ArrowUp from './ArrowUpIcon';
import ArrowRight from './ArrowRight';
import ArrowLeft from './ArrowLeftIcon';
import ArrowDown from './ArrowDownIcon';

export const Icons = {
  PowerOnOff,
  Calendar,
  Settings,
  Person,
  Notification,
  Lock,
  Export,
  Edit,
  ArrowUp,
  ArrowRight,
  ArrowLeft,
  ArrowDown,
};

export type IconsType = keyof typeof Icons;
export const IconList = Object.entries(Icons).map(([key, Component]) => ({
  key,
  Component,
}));
