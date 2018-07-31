<?php
/**
 * @file
 * Quiz answer explorer view.
 */

namespace Quiz;

/**
 * Quiz answer explorer view.
 */
class ExplorerView extends \Manage\ManageView {
    /** Constructor
     *
     * Obtains the current status from the session
     * or selects the default if none indicated
     * @param \Course $course Course object
     * @param \User $user User we are viewing
     * @param $get The $_GET supervariable
     * @param $session The $_SESSION supervariable
     */
    public function __construct(\Course $course, \User $user, $get, &$session) {
        parent::__construct($course, $user, $get, $session);

        $this->set_title("Quiz Answer Explorer");
    }

    public function present() {
        $html = $this->backto_console() .
            $this->backto_console();

        return $html;
    }

}