import React from 'react'
import SelfAcc from '../Accordation/SelfAcc';
import DashboardNav from './DashboardNav'
import DashboardSearch from './DashboardSearch';
import MemberDelete from './MemberDel';

const DashboardMember = () => {
  return (
    <>
      <DashboardSearch/>
      <DashboardNav active={3} />
      <MemberDelete/>
    </>
  );
}

export default DashboardMember