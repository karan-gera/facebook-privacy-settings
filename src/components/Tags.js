import React, { useState } from 'react';

const Tags = () => {
  const [tagReview, setTagReview] = useState(false);

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2 style={{ marginBottom: '10px' }}>Tags</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label htmlFor="tag-toggle" style={{ fontSize: '16px' }}>
          Require approval for tags before they appear on your profile
        </label>
        <div className="toggle-switch">
          <input
            type="checkbox"
            id="tag-toggle"
            className="toggle-input"
            checked={tagReview}
            onChange={(e) => setTagReview(e.target.checked)}
          />
          {/* Use label for the slider to link with the input */}
          <label htmlFor="tag-toggle" className="slider"></label>
        </div>
      </div>
    </div>
  );
};

export default Tags;
