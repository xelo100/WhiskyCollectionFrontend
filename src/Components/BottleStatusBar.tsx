import BottleStatus from "../Models/BottleStatus.tsx";

function BottleStatusBar(status: BottleStatus) {
    if (status == BottleStatus.EMPTY) {
        return null;
    }

    if (status == BottleStatus.OPENED) {
        return (
            <div className="justify-end">
                <button>

                </button>
            </div>
        );
    }

    if (status == BottleStatus.UNOPENED) {
        return (
            <div className="justify-end">
                <button>
                    <img src=""/>
                </button>
                <button>

                </button>
            </div>
        );
    }
}

export default BottleStatusBar;