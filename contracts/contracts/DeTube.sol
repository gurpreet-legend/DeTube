// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract DeTube {
    //Model the video
    struct Video {
        uint256 id;
        string hash;
        string title;
        address author;
    }

    event VideoUpload(uint256 id, string hash, string title, address author);

    uint256 public videoCount = 0;
    mapping(uint256 => Video) public videos;

    function uploadVideo(string memory _videoHash, string memory _title)
        public
    {
        require(bytes(_videoHash).length > 0);
        require(bytes(_title).length > 0);
        require(msg.sender != address(0));

        videoCount++;
        videos[videoCount] = Video(videoCount, _videoHash, _title, msg.sender);
        emit VideoUpload(videoCount, _videoHash, _title, msg.sender);
    }
}
