const Leftbar = () => {
  return (
    <div className="left side-menu">
      <div className="sidebar-inner slimscrollleft">
        <div id="sidebar-menu">
          <ul>
            <li className="">
              <a href="" className="active">
                <i className="fa fa-home bg-inserted"></i>{' '}
              </a>
            </li>

            <li className="has_sub">
              <a href="#" className="">
                <i className="fa fa-calendar bg-inserted"></i>{' '}
              </a>
            </li>

            <li className="has_sub">
              <a href="#" className="">
                <i className="fa fa-users bg-inserted"></i>{' '}
              </a>
            </li>

            <li className="has_sub">
              <a href="#" className="">
                <i className="fa fa-envelope-square bg-inserted"></i>{' '}
              </a>
            </li>

            <li className="has_sub">
              <a href="#" className="">
                <i className="fa fa-cog bg-inserted"></i>{' '}
              </a>
            </li>

            <li id="triggerButton" className="has_sub bottom-reset ">
              <a href="#" className="">
                <i className=" fa fa-ellipsis-h"></i>{' '}
              </a>
            </li>
          </ul>
          <div className="clearfix"></div>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  )
}

export default Leftbar
