import { Item, Status, Avatar, Name } from './FriendList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <Item>
    <Status statusType={isOnline}></Status>
    <Avatar src={avatar} alt="User avatar" width="48"></Avatar>
    <Name>{name}</Name>
  </Item>
);

export default FriendListItem;
