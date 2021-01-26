import Moment from 'moment';
export const COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
    disableFilters:true,
   
  },
  {
    Header: 'Username',
    accessor: 'username',
    disableFilters:true,
    
  },
  {
    Header: 'Mobile',
    accessor: 'mobile',
    
  },
  {
    Header: 'Two Factor Status',
    accessor: 'twoFactorStatus',
    disableFilters:true,
  },
  {
    Header: 'UserID',
    accessor: 'userId',
    disableFilters:true,
  },
  {
    Header: 'Maker',
    accessor: 'maker',
    disableFilters:true,
  },
  {
    Header: 'Approval Status',
    accessor: 'approvalStatus',
    disableFilters:true,
  },
  {
    Header: 'Comments',
    accessor: 'comments',
    disableFilters:true,
  },
  {
    Header: 'User Status',
    accessor: 'userStatus',
    disableFilters:true,
  },
  {
    Header: 'Full name',
    accessor: 'fullName',
    disableFilters:true,
  },
  {
    Header: 'DateTime Created',
    disableFilters:true,
    accessor: d => {
      return Moment(d.updated_at)
        .local()
        .format("DD/MM/YYYY hh:mm:ss A")
    }
  },
    

  {
    Header: 'DateTime Modified',
    disableFilters:true,
    accessor: d => {
      return Moment(d.updated_at)
        .local()
        .format("DD/MM/YYYY hh:mm:ss A")
    }
  },
  {
    Header: 'Action Type',
    accessor: 'actionType',
    disableFilters:true,
  },
]

