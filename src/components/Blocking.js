import React, { useState } from 'react';

const Blocking = () => {
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [unblockSearch, setUnblockSearch] = useState('');
  const [allUsers, setAllUsers] = useState(
    [
      'John Doe',
      'Jane Smith',
      'Alice Brown',
      'Bob Johnson',
      'Charlie Green',
      'Emily White',
      'David Black',
      'Sophia Blue',
      'Michael Grey',
      'Linda Purple',
      'Chris Yellow',
      'Sarah Orange',
      'James Red',
      'Patricia Pink',
      'Robert Gold',
      'Jennifer Violet',
      'William Cyan',
      'Elizabeth Indigo',
      'Charles Lime',
      'Karen Magenta',
    ].sort((a, b) => a.localeCompare(b)) 
  );

  const handleBlock = (name) => {
    if (!blockedUsers.includes(name)) {
      setBlockedUsers([...blockedUsers, name]);
      setAllUsers(allUsers.filter((user) => user !== name)); 
      setSearch('');
    }
  };

  const handleUnblock = (name) => {
    if (window.confirm(`Are you sure you want to unblock ${name}?`)) {
      setBlockedUsers(blockedUsers.filter((user) => user !== name));
      setAllUsers([...allUsers, name].sort((a, b) => a.localeCompare(b))); 
    }
  };

  return (
    <div>
      <h2>Blocking</h2>
      <div className="search-section">
        <h3>Block a User</h3>
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className="user-list">
          {allUsers
            .filter((user) => user.toLowerCase().includes(search.toLowerCase()))
            .map((user) => (
              <li key={user} className="user-item">
                {user}
                <button className="block" onClick={() => handleBlock(user)}>
                  Block
                </button>
              </li>
            ))}
        </ul>
      </div>
      <hr className="divider" />
      <div className="search-section">
        <h3>Blocked Users</h3>
        <input
          type="text"
          placeholder="Search blocked users..."
          value={unblockSearch}
          onChange={(e) => setUnblockSearch(e.target.value)}
        />
        <ul className="blocked-list">
          {blockedUsers
            .filter((user) => user.toLowerCase().includes(unblockSearch.toLowerCase()))
            .map((user) => (
              <li key={user} className="blocked-item">
                {user}
                <button className="unblock" onClick={() => handleUnblock(user)}>
                  Unblock
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Blocking;
