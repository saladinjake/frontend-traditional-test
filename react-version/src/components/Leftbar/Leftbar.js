const Leftbar = () => {
  return (
    <div class="left side-menu">
      <div class="sidebar-inner slimscrollleft">
        <div id="sidebar-menu">
          <ul>
            <li class="">
              <a href="" class="active">
                <i class="fa fa-home bg-inserted"></i>{' '}
              </a>
            </li>

            <li class="has_sub">
              <a href="#" class="">
                <i class="fa fa-calendar bg-inserted"></i>{' '}
              </a>
            </li>

            <li class="has_sub">
              <a href="#" class="">
                <i class="fa fa-users bg-inserted"></i>{' '}
              </a>
            </li>

            <li class="has_sub">
              <a href="#" class="">
                <i class="fa fa-envelope-square bg-inserted"></i>{' '}
              </a>
            </li>

            <li class="has_sub">
              <a href="#" class="">
                <i class="fa fa-cog bg-inserted"></i>{' '}
              </a>
            </li>

            <li id="triggerButton" class="has_sub bottom-reset ">
              <a href="#" class="">
                <i class=" fa fa-ellipsis-h"></i>{' '}
              </a>
            </li>
          </ul>
          <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  )
}

export default Leftbar
